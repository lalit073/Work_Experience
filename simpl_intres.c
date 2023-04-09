#include<stdio.h>
int main()
{
    float si, prin, roi, noy;
    printf("enter princple rate of interest and no of year \n");
    scanf("%f %f %f",&prin, &roi , &noy);
    si = prin * roi * noy/100;
    printf("principle = %f / simple intrest = %f",prin,si);
    return 0;
}