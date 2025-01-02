<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To do list</title>
  <link rel="stylesheet" href="StyledeBase.css">
  <script src="script.js" defer ></script>
</head>
<body>
  <div class="table">
    <h1>Liste de Tâches</h1>
    
    <input type="text" id="taskInput" placeholder="Ajouter une tâche..." />
    <br>
    <button id="addTaskButton">Ajouter</button>
    
    <div id="taskCounter">
      <p id="totalTasks">Total : 0</p>
      <p id="completedTasks">Terminées : 0</p>
    </div>
    
    <ul id="taskList"></ul>
    
    <button id="clearAllButton">Tout supprimer</button>
  </div>
</body>
</html>
