#!/bin/bash
set -e
service mysql start
mysql < /app/db.sql
service mysql stop
