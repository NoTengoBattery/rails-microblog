#!/bin/sh

export GIT_FILES=$(git diff --diff-filter=d --cached --name-only)

_fail() {
  ECODE=$?
  printf "~~> $MY_NAME: $FOR: aborting...\n"
  exit $ECODE
}

run_hook() {
  eval local count=\$${FOR}_COUNT
  eval local files=\$$FOR
  [ "0$count" -eq 0 ] && return 0

  printf "~~> $MY_NAME: $FOR: $count files to check\n"
  printf "~~> $MY_NAME: $FOR: running hook...\n"
  { printf "$files" | xargs -0 "$@"; } || _fail
  printf "~~> $MY_NAME: $FOR: hook executed successfully\n"
}

run_program() {
  command=("$@")
  printf "~~> $MY_NAME: $FOR: running program...\n"
  "$@" || _fail
  printf "~~> $MY_NAME: $FOR: program executed successfully\n"
}

add_file() {
  local file="$1\0"
  local variable="$2"
  local count="${2}_COUNT"
  eval eval export $variable=\\\"\$file\\$\$variable\\\"
  eval export $count=$(($count+1))
}
