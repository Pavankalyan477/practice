import java.lang.*;
import java.io.*;
import java.util.*;
public class Prime {
    //INPUT : 7
    // OUTPUT : Prime
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();

        // if(n==1){
        //     System.out.println("No");
        // }
        // else{
        //     int count=0;
        //     for(int i=1;i<=n;i++){
        //         if(n%i==0){
        //             count++;
        //         }
        //     }
        //     if(count>2){
        //         System.out.println("No");
        //     }else{
        //         System.out.println("Yes");
        //     }
        // }
        boolean flag=true;
        for(int i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                flag=false;
                break;
            }
        }
        if(flag==true){
            System.out.println("Yes");
        }else{
            System.out.println("No");
        }
    }
}
