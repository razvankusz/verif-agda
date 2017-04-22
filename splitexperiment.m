splitdep = [
0.0003499985
0.0011260509
0.0021750927
0.0055549145
0.0112278461
0.0235209465
0.0563139915
0.1208460331
0.2479860783
0.5289719105
1.1385109425
2.2289869785
4.863253355
13.6279399395
19.8932347298
42.0620691776
];

splitnodep = [
0.0003268719
0.0008261204
0.0017011166
0.00481987
0.0096697807
0.0204758644
0.0509431362
0.1071867943
0.2230010033
0.458868742
1.0171320438
1.9679627419
4.2045547962
8.3749780655
17.7476789952
32.9114983082
];

n = [
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
];

figure 

plot(n, log2(splitdep), '-x', 'Color', [0, 0.7, 0.9], 'LineWidth', 2,
     n, log2(splitnodep), '-x', 'Color', [1, 0.43, 0.37], 'LineWidth', 2) 

grid on

xlim([10 25])
title('Comparison of runtime for the split experiment')
xlabel('n')
ylabel('logarithm of minimum runtime')
legend('Dependent Version', 'NonDependent Version', 'Location', 'northwest')

print -color -dtex splitexp.tex

