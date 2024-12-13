const number = [1,323,445,7677,87878]

const newNumberOfMultiplay = number     // chaning of the loop 
                              .map((value) => value*10)
                              .map((value) => value+12)
                              .map((value) => value/10)
                              


console.log(newNumberOfMultiplay)
