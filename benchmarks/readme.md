# Benchmarks


This document is generated by `npm start`. It compares simple-statistics performance against similar libraries in JavaScript.


|                         | ss         | science | jStat       | mathjs |
| ----------------------- | ---------- | ------- | ----------- | ------ |
| variance                | 99,565     | 92,064  | **305,801** |        |
| median                  | **54,497** | 5,199   | 17,215      | 1,432  |
| mode                    | 4,595      | 2,311   | **10,078**  | 1,049  |
| medianAbsoluteDeviation | **17,373** |         |             | 522    |
| min                     | 384,394    |         | **528,290** | 41,598 |


Fastest libraries are in bold. Numbers are in operations per second.


### Versions

* simple-statistics: 2.5.0
* science: 1.9.3
* jstat: 1.5.3
* mathjs: 3.11.4
