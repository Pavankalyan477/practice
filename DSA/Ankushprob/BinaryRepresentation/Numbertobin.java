import java.util.*;
public class Numbertobin {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        String str=sc.nextLine();
        int[] arr=new int[str.length()];
        for(int i=0;i<str.length();i++){
            arr[i]=Integer.parseInt(Character.toString(str.charAt(i)));
        }
        int value=0;
        int j=0;
        for(int i=arr.length-1;i>=0;i--){
            if(arr[i]==1){
                value+=Math.pow(2,j);
            }
            j++;
        }
        System.out.println(value);
    }
}
