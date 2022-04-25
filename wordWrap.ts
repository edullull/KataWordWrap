export function wordWrap(line: String, col: number): String{
    
    
    if(line.length > col){
        let partFirst = line.substring(0,col);
        let partSecond = line.substring(col);
        if(line.charAt(col) === ' ') partSecond = line.substring(col + 1);
        if(line.charAt(col - 1) === ' ') partFirst = line.substring(0, col - 1);
        if(line.charAt(col - 2) === ' ') partFirst = line.substring(0, col - 2);
        if(line.charAt(col - 2) === ' ') partSecond = line.substring( col - 1);


        
        
        return partFirst + '\n' + wordWrap(partSecond, col);
    }
    return line;
}