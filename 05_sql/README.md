# Intro to SQL

Let's take a gander at the `music.db` inside of `sqlite3` or SQLite Browser

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL
SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
SELECT * FROM artists WHERE name = "Black Sabbath";
SELECT * FROM artists WHERE name IS "Black Sabbath";
 SELECT * FROM artists WHERE name LIKE "black sABBath";
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans (id PRIMARY KEY, name TEXT);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
ALTER TABLE fans ADD COLUMN artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas?

```sql
INSERT INTO fans (name, artist_id) VALUES ("Gina", 169);
```

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

6. How would you update your name in the fans table to be your new name?

 ```sql
-- Updates the name
UPDATE fans SET name = "Joy" WHERE id = 1;


-- Updates the artist_id
UPDATE fans SET artist_id = 276 WHERE id = 3;

 ```

 BONUS
 6a. How do you delete things from a table called fans;
 ```sql
 -- DELETEs the fan where the id matches 3
 DELETE FROM fans WHERE id = 3;

 ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
SELECT * FROM fans WHERE artist_id IS NOT 169;
SELECT * FROM fans WHERE artist_id != 169;
SELECT * FROM fans WHERE artist_id NOT LIKE 169;
```

8. Write the SQL to display an artists name next to their fan's name

```sql

```
