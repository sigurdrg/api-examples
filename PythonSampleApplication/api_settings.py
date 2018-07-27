from os import environ

# This is your social security number. The same Id which is used when you log in with BankID.
CUSTOMERID = environ['CUSTOMERID']

# Get CLIENTID ('Applikasjonsnøkkel') and SECRET ('Passord') from https://secure.sbanken.no/Personal/ApiBeta/Info
CLIENTID = environ['CLIENTID']
SECRET = environ['SECRET']
