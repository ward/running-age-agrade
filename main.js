const data = require('./data.json');

const structure = {
  "track": [
    { name: "1500", distance: 1500, index: 0 },
    { name: "mile", distance: 1609.344, index: 1 },
    { name: "2000", distance: 2000, index: 2 },
    { name: "3000", distance: 3000, index: 3 },
    { name: "2 mile", distance: 3218.688, index: 4 },
    { name: "4000", distance: 4000, index: 5 },
    { name: "3 mile", distance: 4828.032, index: 6 },
    { name: "5000", distance: 5000, index: 7 },
    { name: "6000", distance: 6000, index: 8 },
    { name: "8000", distance: 8000, index: 9 },
    { name: "5 mile", distance: 8046.72, index: 10 },
    { name: "10000", distance: 10000, index: 11 }
  ],
  "road": [
    { name: "5 km", distance: 5000, index: 0 },
    { name: "6 km", distance: 6000, index: 1 },
    { name: "4 mile", distance: 6437, index: 2 },
    { name: "8 km", distance: 8000, index: 3 },
    { name: "5 mile", distance: 8047, index: 4 },
    { name: "10 km", distance: 10000, index: 5 },
    { name: "12 km", distance: 12000, index: 6 },
    { name: "15 km", distance: 15000, index: 7 },
    { name: "10 mile", distance: 16093, index: 8 },
    { name: "20 km", distance: 20000, index: 9 },
    { name: "half", distance: 21097, index: 10 },
    { name: "25 km", distance: 25000, index: 11 },
    { name: "30 km", distance: 30000, index: 12 },
    { name: "marathon", distance: 42195, index: 13 },
    { name: "50 km", distance: 50000, index: 14 },
    { name: "50 mile", distance: 80467, index: 15 },
    { name: "100 km", distance: 100000, index: 16 },
    { name: "150 km", distance: 150000, index: 17 },
    { name: "100 mile", distance: 160934, index: 18 },
    { name: "200 km", distance: 200000, index: 19 },
  ]
};

function name_to_index(name) {
  let res = structure["road"].filter(evt => evt.name === name);
  if (res.length === 0) {
    res = structure["track"].filter(evt => evt.name === name);
  }
  if (res.length > 0) {
    return res[0].index;
  } else {
    throw new Error("No such event");
  }
}

function get_world_record(distance, age, gender, surface) {
  if (!validate.age(age)) {
    throw new Error("Age has to be in the [5, 100] range");
  }
  if (!validate.gender(gender)) {
    throw new Error("Gender has to be male or female");
  }
  if (!validate.surface(surface)) {
    throw new Error("Surface has to be road or track");
  }
  let idx = name_to_index(distance);
  let age_index = age - 5;
  let age_data = data[surface][gender][age_index];
  return age_data[idx];
}

function get_age_grade(time, distance, age, gender, surface) {
  if (!validate.time(time)) {
    throw new Error("Expected a positive number as time");
  }
  let world_record = get_world_record(distance, age, gender, surface);
  let ratio = world_record / time;
  return ratio * 100;
}

function get_time(age_grade, distance, age, gender, surface) {
  if (!validate.age_grade(age_grade)) {
    throw new Error("Expected a positive number as age grade");
  }
  let world_record = get_world_record(distance, age, gender, surface);
  let time = world_record / (age_grade / 100);
  return time;
}

const validate = {
  "time": t => typeof t === "number" && t > 0,
  "surface": s => s === "road" || s === "track",
  "gender": g => g === "male" || g === "female",
  "age": n => n >= 5 && n <= 100,
  "age_grade": ag => typeof ag === "number" && ag > 0
};

module.exports = {
  "get_age_grade": get_age_grade,
  "get_time": get_time
};
