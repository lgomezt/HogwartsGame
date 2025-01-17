const instructions = `
  <p>Your team must lift the curse placed on the following Python code to solve the Hogwarts Game.</p>
  <p><strong>The code is cursed with 3 errors that you need to find and fix together.</strong> Follow these steps to succeed:</p>
  <p>The code will receive an integer input (e.g., 10) and must <code>print()</code> the correct result according to these rules:</p>
  <ul>
    <li>If the number is a multiple of both 3 and 5, print "Gryffindor".</li>
    <li>If the number is a multiple of 3 (but not 5), print "Ravenclaw".</li>
    <li>If the number is a multiple of 5 (but not 3), print "Slytherin".</li>
    <li>If the number is not a multiple of 3 or 5, print the number itself.</li>
  </ul>
  <h2>How to Break the Curse</h2>
  <ol>
    <li>
      Gather your minds and discuss with your team what the code should print for these numbers: 15, 10, and 9. Make sure all wizards and witches agree on the expected result.
    </li>
    <li>
      <strong>Rounds of Spellcasting:</strong>
      <ul>
        <li>The game will be played in rounds.</li>
        <li>Each round, The Sorting Hat will choose The Chosen One from your team to take their place at the laptop.</li>
      </ul>
    </li>
    <li>
      <strong>The Chosen One's Task:</strong>
      <ul>
        <li>The Chosen One may modify only one line of the code during their turn.</li>
        <li>They can try different input numbers and run the code as many times as they wish before passing the wand to the next wizard.</li>
      </ul>
    </li>
  </ol>
`;

export default instructions;