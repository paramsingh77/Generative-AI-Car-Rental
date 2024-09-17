const Cars = require('../models/CarDetails');
const express = require('express');
const router = express.Router();


module.exports = Cars;


// cassandra Terminology
/*
    1. Data Model - It is an abstract model for organizing elements of data,
                    Data modal vary depending on the type of purpose and capabilty of the database.
                    For cascandra the data modal is based on the quries you want to perform.
    2. Key Space -  It is outtermost logical container of tables, it stores tables and     replication data in other words its container for replication.

    3. Table - table is a combination of rows and columns , the tables are contained with in the k space. as a columnar database, cassandra stores data based on paritions

    4. Paritions: It is a raw rows of data that are stored on a node in the data table based on the parittioning strategy.

    5. Rows: Each row in the parition consists of key value pairs, cassandra stores and recieves data based on the paritions.
    
    6. Primary key: It gurranates the uniqueness if data and second it defines the placement of record in cluster this allows for easy access to data in model.
    
    7. Colums: are stored locally and refered to as cells.
    
    6. Parition key: will descide in which node data will be stored.
'*/