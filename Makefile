.PHONY: start docs

dev:
	npm run dev

docs:
	cp -R static/. docs
	cd docs && ../node_modules/.bin/webpack --config webpack.config.js