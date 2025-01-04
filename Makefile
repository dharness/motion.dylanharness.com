.PHONY: build deploy install

install:
	cd motion-website && npm install

build:
	cd motion-website && npm run build

deploy:
	npx push-dir --dir=motion-website/public --branch=gh-pages --verbose
