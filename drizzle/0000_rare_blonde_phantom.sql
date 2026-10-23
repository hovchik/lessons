CREATE TABLE `courses` (
	`id` text PRIMARY KEY NOT NULL,
	`subject_id` text NOT NULL,
	`grade` integer NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`curriculum_notes` text NOT NULL,
	`hours_per_week` text NOT NULL,
	`published` integer DEFAULT true NOT NULL,
	FOREIGN KEY (`subject_id`) REFERENCES `subjects`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `courses_subject_grade` ON `courses` (`subject_id`,`grade`);--> statement-breakpoint
CREATE TABLE `lessons` (
	`id` text PRIMARY KEY NOT NULL,
	`unit_id` text NOT NULL,
	`course_id` text NOT NULL,
	`position` integer NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`objectives` text NOT NULL,
	`content` text NOT NULL,
	`quiz` text DEFAULT '[]' NOT NULL,
	`duration_min` integer DEFAULT 45 NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`source` text DEFAULT 'seed' NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL,
	FOREIGN KEY (`unit_id`) REFERENCES `units`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `lessons_unit` ON `lessons` (`unit_id`);--> statement-breakpoint
CREATE INDEX `lessons_course_slug` ON `lessons` (`course_id`,`slug`);--> statement-breakpoint
CREATE TABLE `subjects` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`color` text NOT NULL,
	`icon` text NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `units` (
	`id` text PRIMARY KEY NOT NULL,
	`course_id` text NOT NULL,
	`position` integer NOT NULL,
	`title` text NOT NULL,
	`summary` text NOT NULL,
	FOREIGN KEY (`course_id`) REFERENCES `courses`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `units_course` ON `units` (`course_id`);