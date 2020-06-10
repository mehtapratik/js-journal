function countIslands(matrix) {
   let islandCount = 0;

   if (Array.isArray(matrix) && matrix.length > 0) {
      for (let row = 0; row < matrix.length; row++) {
         for (let col = 0; c < matrix[row].length; col++) {
            if (matrix[row][col] == 1) {
               islandCount += completeTheIsland(matrix, row, col);
            }
         }
      }
   }

   return islandCount;

   // ********************

   function completeTheIsland(matrix, row, col) {
      if (row < 0 || row >= matrix.length
      || col < 0 || col >= matrix[r].length
      || matrix[row][col] == 0) {
         return 0;
      }
      else {
         matrix[row][col] = 0;
         completeTheIsland(matrix, row - 1, col);
         completeTheIsland(matrix, row + 1, col);
         completeTheIsland(matrix, row, col - 1);
         completeTheIsland(matrix, row, col + 1);
         return 1;
      }
   }


}

/