/*
Por se uma classe que está no próprio barrel e será usada pelas classes subsequentes,
Imprimivel tem que estar em primeiro, ou o System.JS se confunde regando um erro.

Outra forma de corrigir esse erro é, ao invés de mudar a sequencia de exportação, não
importar nas classes subsequentes de "index.ts", ou seja, importar da própria classe que
possui o método.
*/
export * from './Imprimivel';
export * from './Igualavel';  
export * from './MeuObjeto';
export * from './Negociacao';
export * from './Negociacoes';
export * from './NegociacaoParcial';