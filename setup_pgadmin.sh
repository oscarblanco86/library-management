#!/bin/bash

# Define the connection settings for your database
DATABASE_NAME="your_database"
DATABASE_USER="your_user"
DATABASE_PASSWORD="your_password"
DATABASE_HOST="db"
DATABASE_PORT="5432"

# Create a temporary SQL file to set up the connection
cat <<EOF > /pgadmin_setup.sql
CREATE SERVER db_server
    FOREIGN DATA WRAPPER postgres_fdw
    OPTIONS (host '$DATABASE_HOST', dbname '$DATABASE_NAME', port '$DATABASE_PORT');

CREATE USER MAPPING FOR admin
    SERVER db_server
    OPTIONS (user '$DATABASE_USER', password '$DATABASE_PASSWORD');
EOF

# Start pgAdmin and configure the connection
pgadmin4 &
sleep 10
psql -U $DATABASE_USER -d $DATABASE_NAME -f /pgadmin_setup.sql

# Keep the script running
tail -f /dev/null
