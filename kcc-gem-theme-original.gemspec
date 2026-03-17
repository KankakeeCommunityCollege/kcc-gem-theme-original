# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "kcc-gem-theme-original"
  spec.version       = "2.0.0"
  spec.authors       = ["wdzajicek"]
  spec.email         = ["wdzajicek@gmail.com"]

  spec.summary       = "KCC's Gem-based theme for building jekyll sites."
  spec.homepage      = "https://github.com/KankakeeCommunityCollege/kcc-gem-theme-original"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_data|_includes|LICENSE|README)!i) }

  spec.required_ruby_version = ">= 4.0.0"

  spec.add_runtime_dependency "jekyll", "~> 4"

  spec.add_development_dependency "bundler", "~> 2"
  spec.add_development_dependency "rake", "~> 12"
end
