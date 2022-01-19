

import java.util.*;

class Minimum {
    public static void main(String[] args){

        int[] arr={2,5,1,4};
        // int[] arr={4,9,2,3};

        int sum=arr[0];

        for(int i=1;i<arr.length;i++){
            if(i%2!=0){
                sum=sum+Math.abs(arr[i]-arr[i-1]);
            }else{
                int val=Math.max(1-Math.min(arr[i-1],arr[0]),0);
                sum=sum+val;
            }
        }

        System.out.println(sum);

    }
}