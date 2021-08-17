## Building an ERD 

### Example of ERD box

+------------+
|Student |
+------------+
PK  student_id
   Student_name
   course
   phone|
   Activity
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship
Describes the no. of activities a student can participate. One student can participate in many activities and one activity can be done by many students.

### ERD describing the relationship

+------------+                      +------------+
|Student |                              Activity
+------------+
PK  student_id
   Student_name
   course
   phone|
   Activity
|            |
|            |
|            |
|            |
|            |
+------------+

| Activity |
+------------+
PK activity_id
   sports
   dance classes
|  hiking          |
|   swimming    |
FK   student_id
|            |
|            |
|            |
+------------+
