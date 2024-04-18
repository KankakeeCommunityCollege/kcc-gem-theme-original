# kcc-gem-theme-original

> A Jekyll theme for KCC sites

<!-- [![Gem Version](https://badge.fury.io/rb/kcc-gem-theme.svg)](https://badge.fury.io/rb/kcc-gem-theme) -->

-----

<br>

## Overview

A Gem based Jekyll theme for KCC websites. This is our older theme used for KCC subdomain websites.

-----

<br>

## Install the Gem in a Jekyll Project

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "kcc-gem-theme-original"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: kcc-gem-theme-original
```

-----

<br>

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

-----

<br>

## Development

1. Run the command below to work on development of the theme and live preview it at http://localhost:3000.

```bash
$ npm run dev

# A convenient alias:
alias npm-d="npm run dev"
```

2. Once satisfied with the changes run a production build and look at the preview (localhost:3000) to make sure everything is ok.

```bash
$ npm run production

# A convenient alias:
alias npm-p="npm run production"
```

1. You must release a new version of the gem to use the updates in a project with the gem installed.

**Note:** _Releasing a new gem version is a one-time thing. **You cannot modify the gem once pushed to rubygems.org**
for this reason you should be thoroughly sure your updates are ready for release. **If you release a bad gem your only option is to yank it (`gem yank` command) which cannot be undone!**_

Bump the gem version by incrementing the appropriate major, minor, or patch version number:

```bash
### Example .gemspec file ###
# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "kcc-gem-theme-original"
  spec.version       = "1.0.1" # increase the appropriate number following semantic versioning
# ...
### Remainder of .gemspec file omitted. ###
```

4. Push the changes to GitHub.

```bash
git add .
git commit -m "<your commit message>"
git push -u origin master
```

5. Build the gem.

```bash
$ gem build kcc-gem-theme-original.gemspec

# should return something like:
Successfully built RubyGem
Name: kcc-gem-theme-original
Version: 1.0.1
File: kcc-gem-theme-original-1.0.1.gem
```

6. Push the resulting gem to RubyGems.

```bash
gem push kcc-gem-theme-original-1.0.1.gem

# should return something like:
Pushing gem to https://rubygems.org...
Successfully registered gem: kcc-gem-theme-original (1.0.1)
```

7. Install the new version of the gem.

```bash
gem i kcc-gem-theme-original
```

8. Update projects using the gem.

```bash
<username> @ <computername> in ~repositories/kcc-startup-template
$ bundle update kcc-gem-theme-original
Fetching gem metadata from https://rubygems.org/...........
Fetching gem metadata from https://rubygems.org/.
# ...
```

On your next build you should see any new changes to gem theme.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `kcc-gem-theme.gemspec` accordingly.

-----

<br>

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

-----
