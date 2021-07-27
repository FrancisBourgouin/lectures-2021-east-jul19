Clients that know what they want a synchronous
Clients that are not sure are asynchronous since we'll need to ask them later

|    CLIENTS    | FIRST RUN  | SECOND RUN  | THIRD RUN  |
|---------------|------------|-------------|------------|
|     KNOWS     |    DONE!   |      X      |     X      |
| NOTSURE(3sec) |    QUEUED  |    QUEUED   |   DONE!    |
|     KNOWS     |    DONE!   |      X      |     X      |
| NOTSURE(1sec) |    QUEUED  |    DONE!    |     X      |
|     KNOWS     |    DONE!   |      X      |     X      |