import CONFIG from '../config';
import { StorageType } from '../types';

describe('config', () => {
	it('should have STORAGE_TYPE', () => {
		expect(CONFIG.STORAGE_TYPE).toBeDefined();
	});
	it('should have STORAGE_TYPE set to enum value', () => {
		expect([StorageType.LocalStorage, StorageType.Firebase]).toContain(
			CONFIG.STORAGE_TYPE
		);
	});
	it('should have FIREBASE_CONFIG', () => {
		expect(CONFIG.FIREBASE_CONFIG).toBeDefined();
	});
});
