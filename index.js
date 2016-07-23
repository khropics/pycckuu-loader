module.exports = function(вміст) {
  [
    [/увага\s*\(/g, 'alert('],                        // alert
    [/консоль\./g, 'console.'],                          // console
    [/console\.(логувати|лог)\s*\(/g, 'console.log('], // log
    [/стоп(;|\s+)/g, 'break$1'],                         // break
    [/сталось\s+/g, 'case '],                             // case
    [/клас\s+/g, 'class '],                             // class
    [/цяцянка\s*\(/g, 'catch('],                         // catch
    [/константа\s+/g, 'const '],                         // const
    [/далі(;|\s+)/g, 'continue$1'],                // continue
    [/\s*:/g, 'default:'],                    // default
    [/знищити\s+/g, 'delete '],                          // delete
    [/зроби(\s*{|\s+)/g, 'do$1'],                       // do
    [/інакше(\s+|\{)/g, 'else$1'],                        // else
    [/експортувати\s+/g, 'export '],                   // export
    [/\s+розширяє\s+/g, ' extends '],                   // extends
    [/врешті(\s+|\{)/g, 'finally$1'],                    // finally
    [/по\sколу(\s*\()/g, 'for ('],                           // for
    [/функція(\s+|\()/g, 'function$1'],                  // function
    [/якщо\s*\(/g, 'if ('],                              // if
    [/імпортувати\s+/g, 'import '],                    // import
    [/\s+в\s+/g, ' in '],                                // in
    [/\s+екземпляр(\s+|\()/g, ' instanceof$1'],          // instanceof
    [/нехай\s+/g, 'let '],                               // let
    [/новий\s+/g, 'new '],                               // new
    [/\s+з\s+/g, ' of '],                               // of
    [/віддати\s+/g, 'return '],                          // return
    [/батько\s*\(/g, 'super('],                           // super
    [/Обіцянка\s*\(/g, 'Promise('],                           // promise
    [/перемога\s*\(/g, 'accept('],                           // accept
    [/зрада\s*\(/g, 'reject('],                           // reject
    [/перебрати\s*\(/g, 'switch ('],                     // switch
    [/тут|цей/g, ' this'],                              // this
    [/кинути|зрадити\s+/g, 'throw '],                    // throw
    [/попробовать(\s+|\s*{)/g, 'try$1'],                 // try
    [/тип(\s+|\s*\()/g, 'typeof$1'],                     // typeof
    [/змін(на)?\s+/g, 'var '],                       // var
    [/пусто\s*\(/g, 'void('],                            // void
    [/поки(що)?\s*\(/g, 'while ('],                     // while
    [/разом(\sз)?\s*\(/g, 'with ('],                       // with
    [/поступитись\s+/g, 'yield '],                          // yield
    [/\.підняти|витягнути\(\)/g, '.pop()'],               // pop
    [/\.додати|запхати\(/g, '.push('],                  // push
    [/\.віддзеркалити|перевернути\(\)/g, '.reverse()'],        // reverse
    [/\.зсунути\(\)/g, '.shift()'],                     // shift
    [/\.сортувати\(/g, '.sort('],                      // sort
    [/\.розбити\(/g, '.splice('],                      // splice
    [/\.розсунути\(/g, '.unshift('],                    // unshift
    [/\.звязати|зклеїти\(/g, '.concat('],                // concat
    [/\.поєднати'\(/g, '.join('],                       // join
    [/\.зріз\(/g, '.slice('],                            // slice
    [/\.до(c|С)троки\(\)/g, '.toSrtring()'],              // toString
    [/\.номер(В|в)\(/g, '.indexOf('],                    // indexOf
    [/\.для(К|к)ожного\(/g, '.forEach('],                // forEach
    [/\.кожен\(/g, '.every('],                          // every
    [/\.хоч(О|о)дин\(/g, '.some('],                     // some
    [/\.фильтр(увати)\(/g, '.filter('],                  // filter
    [/\.карта\(/g, '.map('],                             // map
    [/\.звести\(/g, '.reduce('],                         // reduce
    [/\.прототип(\.|\s+)/g, '.prototype$1'],             // prototype
    [/\.довжина/g, '.length'],                             // length
  ].forEach(function(англ) {
    вміст = вміст.replace(англ[0], англ[1]);
  });

  return вміст;
}
