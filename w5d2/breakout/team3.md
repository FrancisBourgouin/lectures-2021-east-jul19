## Building an ERD 

### Example of ERD box

+------------+
| TITLE HERE |
+------------+
|            |
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship
One-To-Many

### ERD describing the relationship

+------------+
|   items    |
+------------+
| PK  id     | 
|    name    |             
|    price   |
|            |
|            |
|            |
+------------+

+------------+
|  customers |
+------------+
| PK   id    |
|    name    |
|    address |
| visit_date |
| FK item_id |
|            |
+------------+

+------------+
| Order      |
+------------+
|    PK orde        |
|            |
|            |
|            |
|            |
|            |
+------------+