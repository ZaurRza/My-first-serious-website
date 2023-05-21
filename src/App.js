import { Route, Routes } from "react-router-dom";
import { Java } from "./LangPage/Java";
import { Create } from "./Pages/CreateArticles.js";
import { Cplusplus } from "./LangPage/C++";
import { C1 } from "./LangPage/1C";
import { Pascal } from "./LangPage/Pascal";
import { TS } from "./LangPage/TS";
import { Scala } from "./LangPage/Scala";
import { Swift } from "./LangPage/Swift";
import { SA } from "./LangPage/SA";
import { Rust } from "./LangPage/Rust";
import { Ruby } from "./LangPage/Ruby";
import { R } from "./LangPage/R";
import { PHP } from "./LangPage/PHP";
import { Perl } from "./LangPage/Perl";
import { ObC } from "./LangPage/Ob-C";
import { Matlab } from "./LangPage/Matlab";
import { Kotlin } from "./LangPage/Kotlin";
import { JS } from "./LangPage/JS";
import { Haskell } from "./LangPage/Haskell";
import { Groovy } from "./LangPage/Groovy";
import { Go } from "./LangPage/Go";
import { Erlang } from "./LangPage/Erlang";
import { Elixir } from "./LangPage/Elixir";
import { Delphi } from "./LangPage/Delphi";
import { Dart } from "./LangPage/Dart";
import { Clojure } from "./LangPage/Clojure";
import { C } from "./LangPage/C";
import { Assembler } from "./LangPage/Assembler";
import { ASM } from "./LangPage/ASM";
import { ABAP } from "./LangPage/ABAR";
import { Lua } from "./LangPage/Lua";
import { Csharp } from "./LangPage/Csharp";
import { Python } from "./LangPage/Python";
import { OnePage } from "./Pages/OnePage";
import { LogReg } from "./Pages/LogReg";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Java />} />
      <Route path="/C++" element={<Cplusplus />} />
      <Route path="/CreateArt" element={<Create />} />
      <Route path="/1C" element={<C1 />} />
      <Route path="/Pascal" element={<Pascal />} />
      <Route path="/TS" element={<TS />} />
      <Route path="/Scala" element={<Scala />} />
      <Route path="/Swift" element={<Swift />} />
      <Route path="/SA" element={<SA />} />
      <Route path="/Rust" element={<Rust />} />
      <Route path="/Ruby" element={<Ruby />} />
      <Route path="/R" element={<R />} />
      <Route path="/PHP" element={<PHP />} />
      <Route path="/Perl" element={<Perl />} />
      <Route path="/ObC" element={<ObC />} />
      <Route path="/Matlab" element={<Matlab />} />
      <Route path="/Kotlin" element={<Kotlin />} />
      <Route path="/JS" element={<JS />} />
      <Route path="/Haskell" element={<Haskell />} />
      <Route path="/Groovy" element={<Groovy />} />
      <Route path="/Go" element={<Go />} />
      <Route path="/Erlang" element={<Erlang />} />
      <Route path="/Elixir" element={<Elixir />} />
      <Route path="/Delphi" element={<Delphi />} />
      <Route path="/Dart" element={<Dart />} />
      <Route path="/Clojure" element={<Clojure />} />
      <Route path="/Csharp" element={<Csharp />} />
      <Route path="/C" element={<C />} />
      <Route path="/Assembler" element={<Assembler />} />
      <Route path="/ASM" element={<ASM />} />
      <Route path="/ABAP" element={<ABAP />} />
      <Route path="/Lua" element={<Lua />} />
      <Route path="/Python" element={<Python />} />
      <Route path="/:lang/article/id/:id" element={<OnePage />} />
      <Route path="/logreg" element={<LogReg />} />
    </Routes>
  );
}
export default App;
