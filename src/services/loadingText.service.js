import { getRandomInt } from 'services/utilities.service';
import sentences from 'services/sentences';

let notUsedSentences = sentences.slice();

export function generate() {
    if (notUsedSentences.length < 1) {
        // reboot...
        notUsedSentences = sentences.slice();
    }

    const randomIndex = getRandomInt(0, notUsedSentences.length - 1);
    const newSentence = notUsedSentences[randomIndex];

    notUsedSentences.splice(randomIndex, 1);

    return newSentence;
}
