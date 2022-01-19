import java.util.*;
public class Binary {
//     Sample Input
// N = 7
// Sample Output
// 00000000000000000000000000000111
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] a=new int[32];
        Arrays.fill(a,0);
        int len=a.length-1;
        while(n>0){
            int temp=n%2;
            a[len]=temp;
            len--;
            n=n/2;
        }
        for(int i=0;i<32;i++){
            System.out.print(a[i]);
        }
    }
    
}
