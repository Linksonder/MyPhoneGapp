  function initDB()
  {
  	  	var db = window.openDatabase("MyFirstGapDb", "1.0", "MyFirstGap", 2*1024*1024);
  		db.transaction(createDB, errorCB, successDB);
  		return db;
  }

  function createDB(tx)
  {
  		//tx.executeSql('DROP TABLE IF EXISTS TODOS');

  		tx.executeSql('CREATE TABLE IF NOT EXISTS TODOS ("id" INTEGER PRIMARY KEY ASC, name, descr, time)');

  }

  function succesQueryDB(tx){
  		console.log("query succesfull");
  }

  function errorCB(err)
  {
  	debugger;
  		console.log("Error processing SQL: " + err.code);
  }

  function successDB()
  {
  		console.log("Succes!");
  }