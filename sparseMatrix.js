const mat1 = [[1, 0, 0], [-1, 0, 3]];
const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];


const rows_mat1 = mat1.length;
const cols_mat1 = mat1[0].length;
const rows_mat2 = mat2.length;
const cols_mat2 = mat2[0].length;


const result = new Array(rows_mat1).fill(0).map(() => new Array(cols_mat2).fill(0));


for (let i = 0; i < rows_mat1; i++) {
  for (let j = 0; j < cols_mat2; j++) {
    for (let k = 0; k < cols_mat1; k++) {
      result[i][j] += mat1[i][k] * mat2[k][j];
    }
  }
}


for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
