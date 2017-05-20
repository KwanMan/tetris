BIN = ./node_modules/.bin

.PHONY: dev build

dev:
	$(BIN)/jetpack

build:
	$(BIN)/jetpack build

start:
	$(BIN)/jetpack start