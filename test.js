const assert = require('assert');

const agegrade = require('.');

assert(agegrade.get_age_grade(317, "mile", 29, "male", "track") > 70.28);
assert(agegrade.get_age_grade(317, "mile", 29, "male", "track") < 70.29);
assert(agegrade.get_age_grade(1036, "5 km", 29, "male", "road") > 75.28);
assert(agegrade.get_age_grade(1036, "5 km", 29, "male", "road") < 75.29);

assert(agegrade.get_time(80, "5 km", 29, "male", "road") === 975);
