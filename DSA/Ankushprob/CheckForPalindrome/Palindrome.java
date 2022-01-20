import java.util.*;
public class Palindrome {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        sc.nextLine();
        String str=sc.nextLine();
        String st="";
        for(int i=n-1;i>=0;i--){
            st=st+str.charAt(i);
        }
        if(str.equals(st)){
            System.out.println("Yes");
        }else{
            System.out.println("No");
        }
    }
}
