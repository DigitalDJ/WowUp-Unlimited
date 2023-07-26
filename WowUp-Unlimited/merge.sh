#!/usr/bin/env bash
set -Eeuo pipefail

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

GITHUB_WORKSPACE="${GITHUB_WORKSPACE:=${SCRIPT_DIR}/../}"

CURR_REPO_DIR="${GITHUB_WORKSPACE}/WowUp"
MERGE_REPO_DIR="${GITHUB_WORKSPACE}/WowUp.CF"

while IFS= read -r f ; do
  d=$(dirname "${f}")
  if [ ! -d "${CURR_REPO_DIR}/${d}" ] ; then
    mkdir -p "${CURR_REPO_DIR}/${d}"
  fi
  echo "${f}"
  cp -af "${MERGE_REPO_DIR}/${f}" "${CURR_REPO_DIR}/${f}"
done < "${SCRIPT_DIR}/unlimited-patches/orphans.lst"

find "${SCRIPT_DIR}/unlimited-patches/" -name "*.patch" -type f -print | sort -n |
while IFS= read -r f ; do
  echo "$(basename ${f})"
  patch -p0 -d "${CURR_REPO_DIR}" < "${f}"
done
