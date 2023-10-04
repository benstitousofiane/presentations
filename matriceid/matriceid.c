#include <stdio.h>

#define LIGNE 10
#define COLONNE 10

void display(int tableaux[LIGNE][COLONNE]){
    for (int i = 0; i < LIGNE; i++){
        for (int j = 0; j < COLONNE; j++){
            printf("%d", tableaux[i][j]);
        }
        printf("\n");
    }
}

int main(void){
    int matrice_id[LIGNE][COLONNE];

    for (int i = 0; i < LIGNE; i++){
        for (int j = 0; j < COLONNE; j++){
            if (i == j){
                matrice_id[i][j] = 1;
            } else{
                matrice_id[i][j] = 0;
            }
        }
    }

    display(matrice_id);

    return 0;
}