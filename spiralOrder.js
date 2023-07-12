function generateSpiralMatrix(n) {
    let matrix = new Array(n);
    for (let i = 0; i < n; i++) {
      matrix[i] = new Array(n);
      
    }
    // return matrix
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
  
    let num = 1;
  
    while (num <= n * n) {
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num;
        num++;
      }
      top++;
  
  
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num;
        num++;
      }
      right--;
  
   
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num;
        num++;
      }
      bottom--;
  
  
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num;
        num++;
      }
      left++;
    }
  
    return matrix;
  }
  
  
  let n = 3;
  let spiralMatrix = generateSpiralMatrix(n);
  
  
  for (let row of spiralMatrix) {
    console.log(row);
  }
  