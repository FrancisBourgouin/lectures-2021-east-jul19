-- SELECT EVERYTHING  42

-- SELECT * FROM authors;

-- SELECT SPECIFIC

-- SELECT * FROM authors WHERE name = 'Paul'; -- Meh
-- SELECT * FROM authors WHERE name LIKE 'Paul'; -- Good
-- SELECT * FROM authors WHERE authors.name = 'Paul';
-- SELECT * FROM authors WHERE authors.name LIKE 'Paul';

-- SELECT * FROM authors WHERE description = '%july%'; -- BAD
-- SELECT * FROM authors WHERE description LIKE '%july%'; -- GOOD

-- SELECT * FROM authors WHERE name LIKE '%a%'; -- Case sensitive
-- SELECT * FROM authors WHERE LOWER(name) LIKE '%a%'; -- Case sensitive
-- SELECT * FROM authors WHERE description LIKE '% in%'; -- Case sensitive
-- SELECT * FROM authors WHERE name ILIKE '%a%'; -- Case insensitive

-- JOINS !

SELECT jokes.*, authors.name FROM jokes JOIN authors ON jokes.author_id = authors.id;
SELECT jokes.*, authors.name FROM authors JOIN jokes ON jokes.author_id = authors.id;

-- SELECT jokes.*, authors.name FROM jokes RIGHT OUTER JOIN authors ON jokes.author_id = authors.id;

-- -- SELECT jokes.*, authors.name FROM jokes LEFT OUTER JOIN authors ON jokes.author_id = authors.id;

-- -- SELECT jokes.*, authors.name FROM jokes FULL OUTER JOIN authors ON jokes.author_id = authors.id;


-- SELECT 
--   jokes.*, authors.name 
-- FROM 
--   jokes 
-- JOIN 
--   authors 
-- ON 
--   jokes.author_id = authors.id
-- ORDER BY
--   authors.name ASC
-- LIMIT
--   4
-- ;

SELECT 
  authors.name, authors.id, authors.description AVG(rating) AS average_score 
FROM 
  jokes
JOIN
  authors
ON
  authors.id = jokes.author_id
GROUP BY 
  authors.name, authors.id, authors.description
HAVING 
  AVG(rating) > 4;


SELECT author_id FROM jokes GROUP BY author_id HAVING AVG(rating) > 4;

SELECT 
  *
FROM
  authors
WHERE
  -- if(authors_array.includes(id))
  id IN (SELECT author_id FROM jokes GROUP BY author_id HAVING AVG(rating) > 4);


SELECT 
  *
FROM
  authors
WHERE
  -- if(authors_array.includes(id))
  id IN (SELECT author_id FROM jokes WHERE question ILIKE '%h%');


SELECT DISTINCT
  authors.*
FROM 
  authors
JOIN
  jokes
ON
  authors.id = jokes.author_id
WHERE
  lower(jokes.question) LIKE '%w%' ;