.PHONY: build deploy install

install:
	cd motion-website && npm install

build:
	cd motion-website && npm run build

deploy:
	npx push-dir --dir=motion-website/dist --branch=gh-pages --verbose
