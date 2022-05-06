### GKK Database

1. Install mongosh to run data scripts in this repository.

2. Connect to Atlas
    - `cd PATH/TO/MONGOSH/EXE/FILE`
    - `./mongosh MONGO_DB_SRV_STRING`

3. Run the scripts
    - `load("../producerDataScript.js");`
    - `load("../consumerDataScript.js");`
    - `load("../foodDataScript.js");`
    - `load("../allOrdersDataScript.js");`
    - `load("../allReviewsScripts.js");`
    - <!-- `load("../deactivatedProducers&ConsumersDataScript.js");` -->
