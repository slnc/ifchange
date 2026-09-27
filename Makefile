.PHONY: clean

clean:
	cargo clean
	rm -rf pypi/ifchange/bin pypi/dist
	rm -rf npm/platforms npm/README.md
	find . -type d -name __pycache__ -prune -exec rm -rf {} +
