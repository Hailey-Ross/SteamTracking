#!/bin/bash

LOCKFILE=.support/update.lock

if [ -f "$LOCKFILE" ] && kill -0 "$(cat $LOCKFILE)" 2>/dev/null; then
	echo Still running
	exit 1
fi

echo $$ > $LOCKFILE

#mkdir -p .support/{archives,bins,linux_archives,linux_bins,steampal_archives}

php update.php "$1"

git add -A
git commit -S -a -m "$(git status --porcelain | wc -l) files | $(git status --porcelain|awk '{print "basename " $2}'| sh | sed '{:q;N;s/\n/, /g;t q}')"
git push

rm $LOCKFILE
