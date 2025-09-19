#!/bin/bash

# Simple Interest Calculator

read -p "Enter principal amount: " P
read -p "Enter rate of interest (in %): " R
read -p "Enter time (in years): " T

SI=$(echo "scale=2; $P * $R * $T / 100" | bc)

echo "Simple Interest = $SI"
