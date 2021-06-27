/**
 * @jest-environment jsdom
 */
import Note from '../classes/note';

describe('note', () => {
	it('should be constructable', () => {
		const note = new Note('', '');
		expect(note).toBeDefined();
	});

	it('should have properties', () => {
		const note = new Note('title', 'body', true, '123123');
		expect(note.noteTitle).toBe('title');
		expect(note.noteText).toBe('body');
		expect(note.pinned).toBe(true);
		expect(note.id).toBe('123123');
	});

	it('should return object', () => {
		const note = new Note('title', 'body', true, '123123').getElement();
		expect(typeof note).toBe('object');
	});
});
