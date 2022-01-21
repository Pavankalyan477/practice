import java.util.*;
public class BubbleSort {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
            int n=sc.nextInt();
            int[] a=new int[n];
            for(int i=0;i<n;i++){
                a[i]=sc.nextInt();
            }
            for(int i=0;i<n;i++){
                boolean flag=false;
                for(int j=0;j<n-i-1;j++){
                    if(a[j]>a[j+1]){
                        int temp=a[j];
                        a[j]=a[j+1];
                        a[j+1]=temp;
                        flag=true;
                    }
                }
                if(flag==false){
                    break;
                }
            }
            for(int i=0;i<n;i++){
                System.out.print(a[i]+" ");
            }
        

    }
}
