# Deployment

## Uberspace deployment

`.github/workflows/deploy-uberspace.yml` separately builds the site and uploads
it over SSH on pushes to `main` or when manually run on `main`. Set up the
following under **Settings → Secrets and variables → Actions** before running it:

- Repository variable `UBERSPACE_SSH_HOST`: the Uberspace SSH hostname, for example `example.uberspace.de`.
- Repository variable `UBERSPACE_SSH_USER`: the Uberspace account username.
- Repository variable `UBERSPACE_SSH_KNOWN_HOSTS`: the SSH host key line for that hostname, verified against Uberspace's published host key fingerprints or another trusted channel.
- Repository secret `UBERSPACE_SSH_PRIVATE_KEY`: a dedicated, unencrypted SSH private key whose public key is installed in the account's `~/.ssh/authorized_keys`.
- Optional repository variable `UBERSPACE_BASE_URL`: the URL path for the site, including leading and trailing slashes. It defaults to `/`.

For example, generate a dedicated key with `ssh-keygen -t ed25519 -f uberspace-deploy -N ''`;
install the `.pub` file on the server and store the complete private key as the
secret. Obtain a candidate host key with `ssh-keyscan -H example.uberspace.de`
and verify its fingerprint independently before saving the line as the variable.
See [Uberspace's deployment guide](https://lab.uberspace.de/howto_automatic-deployment/)
for SSH setup and optional restrictions on the deployment key.

The destination is `/var/www/virtual/<username>/jabref.org/`, a separate
document root for `jabref.org`. Before deploying, register `jabref.org` and
`www.jabref.org` with `uberspace web domain add`, create the `jabref.org`
directory under `/var/www/virtual/<username>/`, and create `www.jabref.org` in
the same directory as a relative symlink to `jabref.org`. Keep the existing
`html` directory: Uberspace requires it for additional document roots.

In Cloudflare, configure the web DNS records using the addresses provided by
Uberspace. Preserve the existing MX and other mail-related records. See the
[Uberspace domain documentation](https://manual.uberspace.de/en/web-domains.html)
and [document root documentation](https://manual.uberspace.de/en/web-documentroot/).
Use the account's SSH hostname for `UBERSPACE_SSH_HOST`; it may differ from the
public website URL. The upload replaces matching files but does not delete old
files; remove obsolete files manually when necessary. GitHub Pages remains
enabled independently.
