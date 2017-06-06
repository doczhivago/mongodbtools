// Run using a Batch file, RunCompactDB.bat
// Contents of RunCompactDB.bat are below. 
// Update with correct credentials and details. 
// Outputs log file to C:\Users\Public\Documents\mongodb_oplog.json
//
// "C:\Program Files\MongoDB\Server\3.2\bin\mongo.exe" DatabaseName --host localhost --port 2701x --username Username --password Password --authenticationDatabase Auth < CompactDB.js >> C:\Users\Public\Documents\mongodb_oplog.json

db.getCollectionNames().forEach(function (collectionName) {
    print('Compacting: ' + collectionName);
    db.runCommand({ compact: collectionName });
});
