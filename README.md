Small JavaScript library that lets you check the age grade over various
distances, surfaces, genders, and ages.  All data courtesy of Alan L. Jones as
provided on https://www.runscore.com/Alan/AgeGrade.html.  In particular, the
data contained herein are from the following datasets:

- Male Road 2015
- Female Road 2015
- Male Track 2005
- Female Track 2006

These were the most recent versions for each category at the time of checking.

# License of the data

The data is provided by Alan L. Jones under the [CC BY
4.0](https://creativecommons.org/licenses/by/4.0/) terms.

# Creating the data.json file

Extracted from the originals at https://www.runscore.com/Alan/AgeGrade.html.
Taking notes in case I need to extract a newer version in the future.

1. Opened `.xls` file in LibreOffice
2. Saved as `.csv` with , delimiter and " quote
3. Delete first 4 or 5 lines (just till above the first age line)
4. Delete first number from every line (it's the age). `sed -i 's/[0-9]\+,//' FILE`
5. Enclose every line in `[` and `]`. `sed -i 's/^/\[/; s/$/\],/' FILE`
6. Throw it all in a data.json file
