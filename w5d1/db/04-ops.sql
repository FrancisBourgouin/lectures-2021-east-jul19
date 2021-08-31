SELECT 
  authors.name,
  json_agg(
    json_build_object(
      'id', jokes.id, 
      'question', jokes.question
    )
  ) AS jokes_stuff
FROM
  authors
JOIN
  jokes
ON
  jokes.author_id = authors.id
GROUP BY
  authors.name
;