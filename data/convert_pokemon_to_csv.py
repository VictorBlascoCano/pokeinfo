#!/usr/bin/env python3
"""
Convierte pokemon.txt a CSV con campos seleccionables (snake_case)
"""

import argparse
import csv
import re
from pathlib import Path
import pandas as pd


# -----------------------------
# Parseo del archivo pokemon.txt
# -----------------------------
def parse_pokemon_file(path: Path):
    text = path.read_text(encoding="utf-8", errors="ignore")
    blocks = re.split(r"\n#-+.*\n", text)

    records = []

    for block in blocks:
        block = block.strip()
        if not block:
            continue

        m = re.match(r"^\[([^\]]+)\]\s*", block)
        if not m:
            continue

        record = {"_id": m.group(1)}

        for line in block.splitlines()[1:]:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" not in line:
                continue

            key, value = line.split("=", 1)
            record[key.strip()] = value.strip()

        records.append(record)

    return records


def to_snake_case(name: str) -> str:
    # EVs -> evs
    if name.isupper():
        return name.lower()

    # TutorMoves -> tutor_moves
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    s2 = re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1)
    return s2.lower()


# ------------------------------------
# Normalización a snake_case
# ------------------------------------
def normalize_record(rec: dict):
    out = {}

    # Nombre
    out["name"] = rec.get("Name", "")

    # Types → type_1, type_2
    types = rec.get("Types", "")
    types = [t.strip() for t in types.split(",") if t.strip()]
    out["type_1"] = types[0] if len(types) > 0 else ""
    out["type_2"] = types[1] if len(types) > 1 else ""

    # BaseStats → columnas separadas
    stats = rec.get("BaseStats", "")
    stats = [s.strip() for s in stats.split(",") if s.strip()]
    stat_names = ["hp", "attack", "defense", "speed", "sp_attack", "sp_defense"]

    for i, stat in enumerate(stat_names):
        out[stat] = stats[i] if i < len(stats) else ""

    # Resto de campos → snake_case automático
    skip_keys = {"Name", "Types", "BaseStats"}

    for key, value in rec.items():
        if key in skip_keys:
            continue

        snake_key = to_snake_case(key)
        out[snake_key] = value

    return out


# -----------------------------
# Programa principal
# -----------------------------
def main():
    parser = argparse.ArgumentParser(description="Exportar pokemon.txt a CSV (snake_case)")
    parser.add_argument("--input", default="pokemon.txt")
    parser.add_argument("--output", default="pokemon.csv")
    parser.add_argument(
        "--fields",
        default=(
            "name,type_1,type_2,hp,attack,defense,speed,sp_attack,sp_defense,"
            "evs,moves,tutor_moves,catch_rate,happiness,abilities,hidden_abilities,"
            "height,weight,pokedex,generation,evolutions"
        ),
    )

    args = parser.parse_args()

    records = parse_pokemon_file(Path(args.input))
    normalized = [normalize_record(r) for r in records]

    fields = [f.strip() for f in args.fields.split(",") if f.strip()]

    df = pd.DataFrame([{f: r.get(f, "") for f in fields} for r in normalized])

    df.to_csv(
        args.output,
        index=False,
        encoding="utf-8",
        quoting=csv.QUOTE_MINIMAL,
    )

    print(f"✔ CSV generado: {args.output}")
    print(f"✔ Pokémon exportados: {len(df)}")


if __name__ == "__main__":
    main()
